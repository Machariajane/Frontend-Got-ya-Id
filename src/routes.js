import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Home} from './components/Auth/home.component'
import Navbar from './components/nav.component'
import {Footer} from './components/footer.component'
import {Login} from './components/Auth/login.component'
import {Register}  from './components/Auth/register.component'
import {Forgot} from './components/Auth/forgot.component'
import {Profile} from './components/Auth/profile.component'
import {Allids} from './components/Id/allids.component'
import {Createclaim} from './components/Id/createclaim.component'
import {Postid} from './components/Id/postid.component'
import { Viewid } from './components/Id/viewid.component'
import  {Myposts} from './components/Id/myposts.component'




export const Routes = () => (
<BrowserRouter>
    <div className="App">
      <Navbar />
      <div >
           
              <Switch>
                 <Route exact path='/' component={Home } />
                 <Route exact  path='/login' component={Login  } />
                 <Route exact path='/register' component={Register} />
                 <Route exact path = '/forgot' component={Forgot} />
                 <Route exact path = '/profile' component={Profile} />
                 <Route exact path = '/allids' component={Allids} />
                 <Route exact path = '/createclaim' component={Createclaim} />
                 <Route exact path = '/postid' component={Postid} />
                 <Route exact path = '/navbar' component={Navbar} />
                 <Route exact path = '/viewid/:id' component={Viewid} />
                 <Route exact path = '/myposts' component={Myposts} />

              </Switch>
           </div>
           <Footer />
      </div>
    
    </BrowserRouter>
)