import styled from '@emotion/styled';

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BorderBox = styled.div`
  border: 0.15rem #9f8e8e solid;
  border-radius: 0.3rem;
  padding: 1.5rem 1rem;
  margin: 1rem 0;
`;

const Resume = () => {
  return (
    <>
      <ContentsContainer>
        <BorderBox>
          <h1>실전코딩 수강</h1>
          <h2>2024.03 ~ 2024.06</h2>
          <span>
            프론트엔드 뿐만 아니라 백엔드 부분의 동작에 대한 호기심을 해결한 명강의를 수강하여 다양한 웹개발 기술 스택들과 음스킬들을 획득할 수 있었음
          </span>
        </BorderBox>
        <BorderBox>
          <h1>충남대학교 편입</h1>
          <h2>2023.03 ~ </h2>
          <span>충남대학교 편입을 위해 학점관리와 토익 준비를 하였으며, 정보처리 산업기사 자격증을 취득함</span>
        </BorderBox>
        <BorderBox>
          <h1>프론트엔트 학습</h1>
          <h2>2021 ~ </h2>
          <span>프론트엔드 개발자로 성장하기 위해 React와 Typescript 학습중</span>
        </BorderBox>
      </ContentsContainer>
    </>
  );
};

export default Resume;
