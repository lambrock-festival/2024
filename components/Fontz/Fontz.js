"use client"

// components/Fontz.js
import React from 'react';
import styles from '../../styles/Fontz.module.scss';

const Fontz = ({ text }) => {
  const classes = [styles.InkTrapRegular, styles.LynoJean, styles.LynoUlys, styles.LynoWalt];

  return (
    <div>
      {text.split('').map((char, index) => (
        /* not a ' ' char */
        char !== ' ' ? (
            
        /* first char */
        index === 0 ? (
          <span key={index} className={classes[0]}>
            {char}
          </span>
        ) :

        /* second char */
        index === 1 ? (
          <span key={index} className={classes[1]}>
            {char}
          </span>
        ) :

        /* third char */
        index === 2 ? (
          <span key={index} className={classes[0]}>
            {char}
          </span>
        ) :

        /* fourth char */
        index === 3 ? (
          <span key={index} className={classes[1]}>
            {char}
          </span>
        ) :

        /* fifth char */
        index === 4 ? (
          <span key={index} className={classes[0]}>
            {char}
          </span>
        ) :

        /* sixth char */
        index === 5 ? (
          <span key={index} className={classes[3]}>
            {char}
          </span>
        ) :

        /* seventh char */
        index === 6 ? (
          <span key={index} className={classes[1]}>
            {char}
          </span>
        ) :

        /* eighth char */
        index === 7 ? (
          <span key={index} className={classes[2]}>
            {char}
          </span>
        ) :

        /* ninth char */
        index === 8 ? (
          <span key={index} className={classes[1]}>
            {char}
          </span>
        ) :

        /* tenth char */
        index === 9 ? (
          <span key={index} className={classes[2]}>
            {char}
          </span>
        ) :

        /* eleventh char */
        index === 10 ? (
          <span key={index} className={classes[2]}>
            {char}
          </span>
        ) :

        /* twelfth char */
        index === 11 ? (
          <span key={index} className={classes[3]}>
            {char}
          </span>
        ) :

        /* thirteenth char */
        index === 12 ? (
          <span key={index} className={classes[0]}>
            {char}
          </span>
        ) :

        /* fourteenth char */
        index === 13 ? (
          <span key={index} className={classes[3]}>
            {char}
          </span>
        ) :

        /* fifteenth char */
        index === 14 ? (
          <span key={index} className={classes[0]}>
            {char}
          </span>
        ) :

        /* sixteenth char */
        index === 15 ? (
          <span key={index} className={classes[3]}>
            {char}
          </span>
        ) :
        
        /* other chars */
        <span key={index} className={classes[index % 4]}>
          {char}
        </span>
        
        ):

        <span key={index} className={classes[3]}>
          {char}
        </span>

      ))}
    </div>
  );
};

export default Fontz;
