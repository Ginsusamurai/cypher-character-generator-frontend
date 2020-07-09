import React from 'react';



const PoolStat = props => {

  console.log('char',props);

  return(
    <section class="layout border mainSize">
      <section class="border auxStat statBottomBox">
        <div class="border midline">{props.character[`${props.auxStat.toLowerCase()}`]}</div>
        <article class="border label">{props.auxStat}</article>
      </section>
      <section class="border midSection statBottomBox center">
        <article class="border fit midline">+</article>
        <article class="border fit midline">{props.character[`${props.stat.toLowerCase()}PoolMax`]}</article>
        <article class="border fit midline">-</article>
        <article class="border label">{props.stat}</article>
      </section>
        
      <section class="border bottomSection">
        <article class="border statBottomBox center">
          <div class="border midline">{props.character[`${props.stat.toLowerCase()}Pool`]}</div>
          <div class="border label">POOL</div>
        </article>
        <article class="border statBottomBox center">
          <div class="border midline">{props.character[`${props.stat.toLowerCase()}Edge`]}</div>
          <div class="border label">EDGE</div>
        </article>
      </section>
    </section>
  )
}

export default PoolStat;