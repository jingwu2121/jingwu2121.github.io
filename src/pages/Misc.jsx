import React from 'react'
import tree from '../assets/images/tree-0.png'
import search_computer from '../assets/images/search_computer-0.png'
import Card from '../components/Card'
import ClustrMaps from '../components/ClusterMaps'

const Misc = () => {
  return (
    <div>
        <div className="container mt-5 pt-3" >
            <Card title='Misc' logo={tree}>
                <ul>
                    <li><a href="https://www.oubac.com/" target="_blank">O.U.Ba.C.</a> Member! :3</li>
                    <li>Piano Lover! (๑•̀ㅂ•́)و✧</li>
                    <li>Procreate Lover! (I am a part-time artist as well!)</li>
                    <li>Amateur music producer. I do J-Rock, funk, neo soul, soothe piano & summer vibe!</li>
                    <li>Pre-professional badminton player</li>
                </ul>
            </Card>
            
            <Card title='Resources' logo={search_computer}>
                <ul>
                    <li><a href="https://numbda.cs.tsinghua.edu.cn/~yuwj/TH-CPL.pdf">THU-CPL</a></li>
                    <li><a href="https://www.ccf.org.cn/Academic_Evaluation/AI/">CCF</a></li>
                </ul>
            </Card>
        </div>

        <div className='container text-center'>
            <a href="https://clustrmaps.com/site/1bzi7"  title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=w5GKewlMS81Z30508D4q2IkFOZgvzpY2QjmU5MglUB4&cl=ffffff" /></a>

            {/* <a href="https://map1.maploco.com/visited-countries/mine.php?c1=m672jxbips-b33j9zwphc-b33jeehfr4-b67s59c4sg-2rrvtnak8w">
            <img src="https://map1.maploco.com/visited-countries/ml/m672jxbips-b33j9zwphc-b33jeehfr4-b67s59c4sg-2rrvtnak8w.gif"  />
            </a> */}
            
        </div>
        
        
    </div>
  )
}

export default Misc