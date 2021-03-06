import React from 'react';

const FeatureWrapper = () => {
    return (
        <div id="features-wrapper">
            <section id="features" className="container">
                <header>
                    <h2>Gentlemen, behold! This is <strong>Strongly Typed</strong>!</h2>
                </header>
                <div className="row">
                    <div className="4u 12u(mobile)">

                        <section>
                            <a href="#" className="image featured"><img src={window.location.origin + '/images/pic01.jpg'} alt=""/></a>
                            <header>
                                <h3>Okay, so what is this?</h3>
                            </header>
                            <p>This is <strong>Strongly Typed</strong>, a free, fully responsive site template
                                by <a href="http://html5up.net">HTML5 UP</a>. Free for personal and commercial use under
                                the
                                <a href="http://html5up.net/license">CCA 3.0 license</a>.</p>
                        </section>

                    </div>
                    <div className="4u 12u(mobile)">

                        <section>
                            <a href="#" className="image featured"><img src={window.location.origin + '/images/pic02.jpg'} alt=""/></a>
                            <header>
                                <h3>Nice! What is HTML5 UP?</h3>
                            </header>
                            <p><a href="http://html5up.net">HTML5 UP</a> is a side project of <a
                                href="http://twitter.com/ajlkn">AJ’s</a> (= me).
                                I started it as a way to both test my <strong>skel</strong> framework and sharpen up my
                                coding
                                and design skills a bit.</p>
                        </section>

                    </div>
                    <div className="4u 12u(mobile)">

                        <section>
                            <a href="#" className="image featured"><img src={window.location.origin + '/images/pic03.jpg'} alt=""/></a>
                            <header>
                                <h3>Skel? What's that?</h3>
                            </header>
                            <p><strong>Skel</strong> is a lightweight framework for building responsive
                                sites and apps. All of my stuff at <a href="http://html5up.net">HTML5 UP</a> (including
                                this
                                one) are built on this framework.</p>
                        </section>

                    </div>
                </div>
                <ul className="actions">
                    <li><a href="#" className="button icon fa-file">Tell Me More</a></li>
                </ul>
            </section>
        </div>
    );
}

export default FeatureWrapper;
