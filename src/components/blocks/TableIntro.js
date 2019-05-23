import React, { Component } from "react";
import styled, { css } from "styled-components";
import { media } from "styles/utils";
import { margins } from "./utils";

const Wrapper = styled.div`
  ${margins} ${props =>
      props.big &&
      css`
        font-size: 0.8em!important;
        a {
          color: #333;
          &:active,
          &:focus,
          &:hover {
            color: #000;
          }
        }
      `} ${props =>
      props.small &&
      css`
        font-size: 0.6em!important;
        color: #666;
      `} ${media.desktop`
    margin-bottom: 1.5rem;
  `} ${media.desktopHD`
    margin-bottom: 2rem;
  `} .paragraph-content {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    display: block;
    ${media.desktopHD`
      max-width: 640px;
    `};
  }
  table {
      border:1px solid #cccccc;
      border-collapse: collapse;
      background-color: #f3f3f3;
      font-size: 0.8em!important;
      th {
          font-wight:bold
      }
      td,th {
        border:1px solid #cccccc;
      }
      td {
        padding:15px 10px 15px 10px;
      }
      th {
        padding:15px 10px 5px 10px;
      }
      th:nth-child(1) {
        text-align:left;
      }
      th:nth-child(2) {
        text-align:right;
      }
      th:nth-child(3) {
        text-align:right;
      }
      th:nth-child(6) {
        text-align:right;
      }
      td:nth-child(1) {
        text-align:center;
      }
      td:nth-child(2) {
        text-align:right;
      }
      td:nth-child(3) {
        text-align:right;
      }
      td:nth-child(5) {
        text-align:center;
      }
      td:nth-child(6) {
        text-align:right;
      }
      td:nth-child(7) {
        text-align:right;
      }
  }

`;
export default ({ children, big, small }) => (
  <Wrapper big={big} small={small}>
    <span className="paragraph-content">{children}</span>
  </Wrapper>
);
