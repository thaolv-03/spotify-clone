import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import styled from 'styled-components'
import CurrentTrack from "../CurrentTrack/CurrentTrack";

const cx = classNames.bind(styles);

export default function Footer() {
  return <Container className={cx("wrapper")}>
    <CurrentTrack />
  </Container>;
}

const Container = styled.div`
    
`
