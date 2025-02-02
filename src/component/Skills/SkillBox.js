import styled from 'styled-components';
import PropTypes from 'prop-types';




const SkillsGrid = styled.div`
margin-top: 15px;
display: flex;
justify-content: start;
align-items: center;
flex-wrap: wrap;

`;

const SkillItem = styled.div`
  background-color: ${({ isActive }) => (isActive ? '#007eff' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  font-size: 14px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-right: 15px;
  margin-bottom: 10px;
  padding: 10px 20px;

  &:hover {
    transform: scale(1.05);
  }
`;

const SkillsBox = ({ skills = [] }) => {
  return (
    <SkillsGrid>
      {skills.map((skill, index) => (
        <SkillItem key={index}>{skill.skill_name}</SkillItem>
      ))}
    </SkillsGrid>
  );
};

SkillsBox.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      skill_name: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default SkillsBox;
