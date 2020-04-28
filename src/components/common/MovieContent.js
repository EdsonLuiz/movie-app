import styled from 'styled-components'

export const MovieContent = styled.div`
  margin-left: 30px;
  width: 100%;

  h2, h3 {
    font-weight: bold;
    color: #333335;
    margin-bottom: 10px;

  }

  h3 {
    opacity: 0.4;
    margin-bottom: 5px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    margin-bottom: 18px;
    color: #b2b3bc;
  }

  ul li + li {
    margin-left: 10px;

  }

  p {
    color: #333335;
    opacity: 0.9;
  }
`
