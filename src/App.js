import './App.css';
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={'/'}>
            <GiKnifeFork />
            Delicious
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
  @media only screen and (max-width: 600px) {
    margin: auto;
    font-size: 2.5rem;
  }
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
