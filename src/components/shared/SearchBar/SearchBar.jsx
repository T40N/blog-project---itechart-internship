import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPosts } from "../../../store/actions/postsActions";
import Icon from "../Icon.styled";
import { Container, Search, SearchIcon, SearchInput } from "./styled";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const value = e.target.value.trim();

    setSearchValue(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(searchPosts(searchValue));
  };

  return (
    <Container onSubmit={onSubmitHandler}>
      <Search>
        <SearchIcon>manage_search</SearchIcon>
        <SearchInput
          placeholder="Search posts..."
          value={searchValue}
          onChange={onChangeHandler}
        ></SearchInput>
      </Search>
    </Container>
  );
};

export default SearchBar;
