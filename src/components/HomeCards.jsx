import React from 'react'
import Card from './Card'
import about from '../assets/images/user_calendar-0.png'
import note from '../assets/images/note-0.png'
import profile_img from '../assets/images/rupert-cat.gif'
import user_computer from '../assets/images/user_computer-0.png'
import users from '../assets/images/users-1.png'
import directory_folder_options from '../assets/images/directory_folder_options-5.png'

import derainnerf from '../project_imgs/derainnerf.jpg'
import gaussctrl from '../project_imgs/gaussctrl.gif'

const HomeCards = () => {
  return (
    <div>
        <div className="container" id="page-content">
        <div className="row ">
            <div className="col-md-6 text-center">
                <img className='profile-image' src={profile_img} alt="profile image" />
            </div>
            <div className="col-md-6 my-auto">
                <Card logo={ about } title='About Me'>
                    Hey, welcome to my homepage. :D <br />
                        
                    I am a 1st year DPhil student at <a href="https://www.robots.ox.ac.uk/ActiveVision/" target="_blank">Active Vision Group</a>, University of Oxford, jointly supervised by Professor <a href="https://www.robots.ox.ac.uk/~victor/" target="_blank">Victor Prisacariu</a> and Dr. <a href="https://campar.in.tum.de/Main/IroLaina" target="_blank">Iro Laina</a>. I also work closely with <a href="https://scholar.google.com/citations?user=XLlgbBoAAAAJ&hl=en" target="_blank">Xinghui Li</a>, and Dr. <a href="https://jwbian.net/" target="_blank">Jia-Wang Bian</a>.
                    Before this, I interned at Westlake University, where I was mentored by Professor <a href="https://ethliup.github.io/">Liu Peidong</a>.
                    I obtained my M.Sc. degree with <b>Distinction</b> from Imperial College London.
                    Prior to that, I received my B.Eng. from the University of Electronic Science and Technology of China (UESTC).
                    I was awarded the Outstanding Graduate Award of Sichuan Province.
                    <br />
                    <br />
                    <div className="time">
                        <a href="https://twitter.com/jingwu23" className="btn start-button">
                            <img src={user_computer} alt="Twitter" />Twitter
                        </a>

                        <a href="https://www.linkedin.com/in/jing-wu-068b7b1b4/" className="btn start-button">
                            <img src={users} alt="Linkedin" />Linkedin
                        </a>
                        <a href="https://github.com/jingwu2121" className="btn start-button">
                            <img src={directory_folder_options} alt="GitHub" />GitHub
                        </a>
                    </div>
                </Card>
            </div>
        </div>
      </div>



        <div className="container" id="page-content">
            <div className="row mb-5">
                <div className="col-md-6 my-auto">
                    <Card title='Research Interest' logo={note}>
                        <ul className="mt-3 mb-4">
                            <li>3D Editing</li>
                            <li>Generative Models, 3D Gaussian Splatting</li>
                            <li>3D Reconstruction, NeRF</li>
                        </ul>
                    </Card>
                </div>

                <div className="col-md-6 ">
                    <Card title='News' logo={note}>
                        <ul>
                            <li>Starting my DPhil at Oxford! :3</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>

        <div className="container">
            <Card title='Research' logo={note}>
            <div class="row single-project">
                <div class="col-4 project_img">
                    <img className='img-fluid' src={gaussctrl} alt="" />
                </div>
                <div class="col-8">
                        <h5><a href="https://gaussctrl.active.vision/" target="_blank">GaussCtrl: Multi-View Consistent Text-Driven 3D Gaussian Splatting Editing</a></h5> 
                        <b>Jing Wu</b>, Jia-Wang Bian, Xinghui Li, Guangrun Wang, Ian Reid, Philip Torr, Victor Adrian Prisacariu  <br />
                        <i>arXiv</i>, 2024 <br />
                        [<a href="https://arxiv.org/abs/2403.08733" target="_blank">Paper</a>][<a href="https://gaussctrl.active.vision/" target="_blank">Web</a>] 
                        
                        <br />
                        <br />
                        GaussCtrl is a text-driven method used to edit a 3D scene. 
                </div>
            </div>

            <div class="row single-project">
                <div class="col-4 project_img">
                    <img className='img-fluid' src={derainnerf} alt="" />
                </div>
                <div class="col-8">
                    <h5><a href="https://arxiv.org/abs/2403.20013" target="_blank">DerainNeRF: 3D Scene Estimation with Adhesive Waterdrop Removal</a></h5> 
                    Yunhao Li, <b>Jing Wu</b>, Lingzhe Zhao, Peidong Liu <br />
                    <i>ICRA</i>, 2024 <br />
                    [<a href="https://arxiv.org/abs/2403.20013" target="_blank">Paper</a>] <br />
                    
                    <br />
                    DerainNeRF is a method used to reconstruct the clear 3D scene implicitly from multi-view images degraded by waterdrops. 
                </div>
            </div>
            </Card>
        </div>


    </div>
  )
}

export default HomeCards