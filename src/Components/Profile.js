
import React from 'react'

const Profile = () => {

    const launch = () => window.open('https://github.com/asadalibest1')

    return (
        <div className="container">
            <h1 class="main-heading">GET well soon dear Earth</h1>
            <div class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend lacus at ante condimentum convallis. Nulla
                et ultricies purus. In mollis ut magna a pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Pellentesque orci eros, maximus nec dui a, euismod molestie mauris. Suspendisse et ligula
                in mauris iaculis commodo nec vitae sapien. Vivamus sed massa et mauris ullamcorper vulputate eu non eros. Duis
                lorem arcu, auctor nec varius molestie, luctus eget quam. Nullam convallis sed tellus eu sollicitudin.
            </div>

            <button class="btn-clean" onClick={launch}>Lets meet!</button>

        </div>)
}

export default Profile