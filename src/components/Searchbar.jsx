import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searchbar = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }
  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 5,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        style={{marginLeft: '8px'}}
        placeholder="Search..."
        className="search-bar"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
