import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { memo } from 'react';

import { type News } from '@/entities/news';
import { Routes } from '@/shared/constants/routes.constant';

import * as Styled from './news-card.styles';

const NewsCardComponent = ({ title, description, url, image, content }: News) => {
  const { t } = useTranslation();
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.DescriptionWrapper>
        {description && <Styled.Description>{description}</Styled.Description>}
        {url && (
          <Styled.OriginLink href={url} target="_blank">
            {t('External link')}
          </Styled.OriginLink>
        )}
      </Styled.DescriptionWrapper>
      {image && <Image src={image} alt={title} width={920} height={480} />}
      {content && <Styled.Content dangerouslySetInnerHTML={{ __html: content }} />}
      <Styled.HomeButton href={Routes.Home} label={t('Go back')} />
    </Styled.Wrapper>
  );
};

export default memo(NewsCardComponent);
