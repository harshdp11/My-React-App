import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TestStatful from "../components/testStateful"
import StyledComponent from "../components/styledComponent"
import TodoApp from "../components/TodoApp/todoApp"
import TodoItem from "../components/TodoApp/todoItem"
import Square from "../components/tictactoe/square"
import Board from "../components/tictactoe/board"
import Game from "../components/tictactoe/game"


const IndexPage = () => (
  <div>
    <TodoApp />
    <hr/>
    <Board />
  </div>
)

export default IndexPage
