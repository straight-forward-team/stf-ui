import styled from '@emotion/styled';
import { contributors } from '@/constants/contributors';

const StyledContributors = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 3px;
`;

const Contributors = () =>
  contributors.map((contributor) => (
    <a
      key={`${contributor.id}`}
      href={contributor.github}
      target='blank'
      title={contributor.alt}
    >
      <StyledContributors src={contributor.imageSrc} alt={contributor.alt} />
    </a>
  ));

export default Contributors;
