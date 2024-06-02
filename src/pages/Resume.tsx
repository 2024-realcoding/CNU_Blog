import styled from '@emotion/styled';

// 스타일된 컨테이너 정의
const StyledResume = styled.div`
  background-color: #f4f4f9;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

// 스타일된 제목 정의
const Title = styled.h2`
  color: #333;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
`;

// 스타일된 내용 정의
const Content = styled.div`
  color: #666;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

// 추가된 섹션에 대한 스타일
const AdditionalSection = styled.div`
  font-size: 16px;
  color: #444;
  margin-top: 10px;
  padding: 10px;
  background: #e9ecef;
  border-radius: 5px;
  line-height: 1.5;
`;

// Resume 컴포넌트 정의
// Resume 컴포넌트 정의
const Resume = () => {
  return (
      <div>
        <StyledResume>
          <Title>창의 경진 대회</Title>
          <Content>우수상 수상</Content>
        </StyledResume>
        <StyledResume>
          <Title>학습 경험</Title>
          <Content>실전코딩 수강<br/>React 사용 방법을 배움</Content>
        </StyledResume>
      </div>
  );
};
export default Resume;
