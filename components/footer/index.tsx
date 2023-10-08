import { useTranslation } from '../../hooks/useTranslation';
import { FooterContainer } from './_style';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <p>{t('footer.description')}</p>
    </FooterContainer>
  );
};
