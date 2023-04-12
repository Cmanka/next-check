import Image from 'next/image';
import { memo } from 'react';

import noImage from '@/shared/assets/images/no-image.png';
import { Routes } from '@/shared/constants/routes.constant';
import { parseUrlById } from '@/shared/lib/helpers/parse-url-by-id.helper';

import * as Styled from './card.styles';
import { type CardProps } from './card.types';

const CardComponent = ({ className, news: { id, title, description, image } }: CardProps) => {
  return (
    <Styled.Wrapper className={className} href={parseUrlById(id, Routes.News)}>
      <Styled.Header>{title}</Styled.Header>
      <Styled.Content>
        {description && <Styled.Description>{description}</Styled.Description>}
        <Styled.ImageWrapper>
          <Image src={image || noImage} alt={title} fill />
        </Styled.ImageWrapper>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default memo(CardComponent);
