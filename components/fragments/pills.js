import styled from 'styled-components'

const PillList = styled.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  margin-bottom: 30px;
`

const Pill = styled.li`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.hoverBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.signsNormal};
  font-weight: 700;
  border-radius: 20px;
  list-style-type: none;
  margin-right: 5px;
  margin-top: 8px;
`

export const Pills = ({ skills }) => {
  return (
    <PillList>
      {skills.map((skill) => (
        <Pill key={skill}>{skill}</Pill>
      ))}
    </PillList>
  )
}
