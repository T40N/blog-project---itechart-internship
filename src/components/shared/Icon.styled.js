import styled from "styled-components";

const Icon = styled.span`
    font-size: ${({ theme }) => theme.font.sizes.l};
    font-family: ${({ theme }) => theme.font.families.icon};
    font-weight: inherit;
`;

export default Icon;
