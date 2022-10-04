import React from 'react'
import styles from "../styles/Card.module.css"

const Card = (e) => {
  return (
    <div className={styles.container}>

        <img  width="20%" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwmALuU19xPRQx_5_ZQK8QqG5HpA79AD5Iw&usqp=CAU' alt='logo'/>

<div className={styles.top}>
<p>{e.postedAt}</p>
<p>{e.contract}</p>
</div>

<h3 className={styles.pos}>{e.position}</h3>
<h5 className={styles.com}>{e.company}</h5>

<p className={styles.loc}>{e.location}</p>

    </div>
  )
}

export default Card