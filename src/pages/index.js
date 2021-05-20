import * as React from "preact"
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5
} from '../components/taccon'
import random from 'random'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const ChosenImg = () => {
    const rando = randomNum();
    switch(`taccon${rando}`) {
      case 'taccon1':
        return <Image1 />
      case 'taccon2':
        return <Image2 />
      case 'taccon3':
        return <Image3 />
      case 'taccon4':
        return <Image4 />
      case 'taccon5':
        return <Image5 />
      default:
        return <Image1 />
    }
  }

  const randomNum = () => {
    return random.int(1,5)
  }

  return(
    <Layout>
      <Seo title="Home" />
      <ChosenImg />
      {/*
        Everything you see, everything you know, everyone in your life, none of it is what you think it is. 
        No one is who you think they they are.
        Everything -- literally everything -- is encoded by your senses, filtered through your brain. and
        submitted to your consciousness for subjective experience. Forgotten civilizations knew this. 
        Shamans, healers, yogis, priests, imams, rabbis, they all knew this. Magicians knew this.
        The Nazis knew this and when the war was over and the prevailing world powers gave them shelter,
        they knew this.

        The face of war changed for good when the bombs fell on Japan and The Red Army and allied powers
        squeezed Berlin to the breaking point. Hitler may as well have been Satan. Not even Tojo made a 
        good face for The Adversary and once Hitler was dead you couldn't count on the public to get 
        behind a years-long campaign of death. Korea proved this. If the United States was going to fight
        a cold war against the Soviet Union it was going to need to manipulate opinion, it was going to
        have to control minds on the widest scale and their most valuable spoils of war knew how to do this.

        Military intelligence took on the operational duties. An entire generation of amoral research scientists
        working in the University network and private institutions with shadowy backgrounds and invisible boards
        took up the developmental duties. Deep black defense budgets paid for some of it. Private investors 
        with an interest in marketing applications paid for the rest. Those investors are or are tied 
        to a synarchy of Ba'al worshippers with their own methods of consciousness control. The cult of Ba'al 
        requires blood, sacrifice, and suffering. 

        It never, ever ends and there's nothing we can do to stop them. They control nations, religions, 
        and public opinion. Their empire is thousands of years old. They consolidated their power when aqueducts
        were a novel technology.

        But consciousness is a strange thing. We are not a planet of billions of individual people. We are a
        planet of billions of links in an unbroken chain of cellular division. Each one of us can, in theory,
        trace our lineage back to the very first organism which spawned life on this planet. Consciousness is the 
        common thread through it all. Our consciousness is shared among us all. Consciousness is one mind.
        Our ego is what differentiates us. It's the firewall that prevents us from realizing our true power.

        Our power is that in spite of all their defenses, all of their power and privilege, it pales in comparison
        to the power of consciousness and we can use it to rise above their trap. We exist here as prisoners to 
        pay their bill. Our blood satisfies their gods. Our bodies are punished to satisfy the people who enable
        them. With the gnosis of true consciousness we can expose them, drag them into the light for all to see,
        and crush them into dust that will be blow away by the winds of time, as forgotten as the cultures that
        knew these secrets and took them to their graves.
      */}
    </Layout>
  )
}

export default IndexPage
