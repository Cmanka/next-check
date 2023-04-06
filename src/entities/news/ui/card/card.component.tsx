import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { memo } from 'react';

import noImage from '@/shared/assets/images/no-image.png';
import { Routes } from '@/shared/constants/routes.constant';
import { parseUrlById } from '@/shared/lib/helpers/parse-url-by-id.helper';

import * as Styled from './card.styles';
import { type CardProps } from './card.types';

const CardComponent = ({ className, news: { id, title, description, image } }: CardProps) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper className={className}>
      <Styled.Header>{title}</Styled.Header>
      <Styled.Content>
        {description && <Styled.Description>{description}</Styled.Description>}
        {image && <Image src={image} alt={title} width={300} height={200} />}
        {!image && <Image src={noImage} alt="no image" width={300} height={200} />}
        <Styled.DetailLink label={t('navigation.text')} href={parseUrlById(id, Routes.News)} />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default memo(CardComponent);
