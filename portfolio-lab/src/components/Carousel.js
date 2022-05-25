import React, {useState} from 'react'

export default function Carousel() {
    const [firstBtn,setFirstBtn] = useState(true);
    const [secondBtn,setSecondBtn] = useState(false);
    const [thirdBtn,setThirdBtn] = useState(false);

    const [firstPage,setFirstPage] = useState(true);
    const [secondPage,setSecondPage] = useState(false);
    const [thirdPage,setThirdPage] = useState(false);
    
    const toggleFirstBtn = ()=> {
        setSecondBtn(false)
        setThirdBtn(false)
        setFirstBtn(!firstBtn);
    };

    const toggleSecondBtn = ()=> {
        setFirstBtn(false)
        setThirdBtn(false)
        setSecondBtn(!secondBtn);
    }

    const toggleThirdBtn = ()=> {
        setFirstBtn(false)
        setSecondBtn(false)
        setThirdBtn(!thirdBtn);
    }

    const toggleFirstPage = ()=> {
            setFirstPage(true);
            setSecondPage(false);
            setThirdPage(false);
    }
    const toggleSecondPage = ()=> {
        setSecondPage(true);
            setFirstPage(false);
            setThirdPage(false);
    }

    const toggleThirdPage = ()=> {
        setThirdPage(true);
        setFirstPage(false);
        setSecondPage(false);
    }
    
    return (
        <div className='carousel' id='carousel'>
            <div className='carousel-header'>
                <h2 className='carousel-title'>Komu pomagamu?</h2> 
                <div className='decoration'/>
            </div>
            <div className='carousel-buttons container'>
                <button 
                className={firstBtn ? 'carousel-btn-active' : 'btn-carousel'}
                onClick={toggleFirstBtn}
                >
                    Fundacjom
                </button>
                <button 
                onClick={toggleSecondBtn}
                className={secondBtn ? 'carousel-btn-active' : 'btn-carousel'}
                
                >
                    Organizacjom pozarządowym
                </button>
                <button 
                onClick={toggleThirdBtn}
                className={thirdBtn ? 'carousel-btn-active' : 'btn-carousel'}
                >
                    Lokalnym zbiórkom
                </button>
            </div>
            <div className='carousel-body container'>
                <div className={firstBtn ? 'carousel-container':'carousel-not-active'}>
                    <h4 className='carousel-heading'>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                        z którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                        komu pomagają i czego potrzebują.
                    </h4>
                    <div className='carousel-comments-section'>
                        <div className={firstPage ?'carousel-single-page': 'carousel-single-page-none'}>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Fundacja “Dbam o Zdrowie”</p>
                                    <span className='carousel-comment-snippet font-italic'>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Fundacja “Dla dzieci”</p>
                                    <span className='carousel-comment-snippet font-italic'>Cel i misja: Pomoc dzieciom z ubogich rodzin.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>ubrania, meble, zabawki</span>
                            </div>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Fundacja “Bez domu”</p>
                                    <span className='carousel-comment-snippet  font-italic'>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>ubrania, jedzenie, ciepłe koce</span>
                            </div>
                        </div>
                        <div className={secondPage ?'carousel-single-page': 'carousel-single-page-none'}>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Fundacja “Druga strona”</p>
                                    <span className='carousel-comment-snippet font-italic'>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Fundacja “Dla dzieci”</p>
                                    <span className='carousel-comment-snippet font-italic'>Cel i misja: Pomoc dzieciom z ubogich rodzin.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>ubrania, meble, zabawki</span>
                            </div>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Fundacja “Bez domu”</p>
                                    <span className='carousel-comment-snippet  font-italic'>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>ubrania, jedzenie, ciepłe koce</span>
                            </div>
                        </div>
                        <div className={thirdPage ?'carousel-single-page': 'carousel-single-page-none'}>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Fundacja “Trzecia strona”</p>
                                    <span className='carousel-comment-snippet font-italic'>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Fundacja “Dla dzieci”</p>
                                    <span className='carousel-comment-snippet font-italic'>Cel i misja: Pomoc dzieciom z ubogich rodzin.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>ubrania, meble, zabawki</span>
                            </div>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Fundacja “Bez domu”</p>
                                    <span className='carousel-comment-snippet  font-italic'>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>ubrania, jedzenie, ciepłe koce</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className='carousel-pagination'>
                        <button 
                        className={firstPage ? 'carousel-page-btn-active':'carousel-page-btn'} 
                        onClick={toggleFirstPage}
                        >1</button>
                        <button 
                        className={secondPage ? 'carousel-page-btn-active':'carousel-page-btn'}
                        onClick={toggleSecondPage}
                        >2</button>
                        <button 
                        className={thirdPage ? 'carousel-page-btn-active':'carousel-page-btn'}
                        onClick={toggleThirdPage}
                        >3</button>
                        
                        
                    </div>
                </div>
                <div className={secondBtn ? 'carousel-container':'carousel-not-active'}>
                    <h4 className='carousel-heading'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </h4>
                    <div className='carousel-comments-section'>
                        <div className={firstPage ? 'carousel-single-page': 'carousel-single-page-none'}>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Organizacja “Lorem Ipsum 1”</p>
                                    <span className='carousel-comment-snippet font-italic'>Quis varius quam quisque id diam vel quam elementum pulvinar.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>Egestas, sed, tempus</span>
                            </div>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Organizacja “Lorem Ipsum 2”</p>
                                    <span className='carousel-comment-snippet font-italic'>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>Ut, aliquam, purus, sit, amet</span>
                            </div>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Organizacja “Lorem Ipsum 3”</p>
                                    <span className='carousel-comment-snippet  font-italic'>Scelerisque in dictum non consectetur a erat nam.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>Mi, quis, hendrerit, dolor</span>
                            </div>
                        </div>
                        <div className={secondPage ? 'carousel-single-page': 'carousel-single-page-none'}>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Organizacja “Strona 2”</p>
                                    <span className='carousel-comment-snippet font-italic'>Quis varius quam quisque id diam vel quam elementum pulvinar.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>Egestas, sed, tempus</span>
                            </div>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Organizacja “Lorem Ipsum 2”</p>
                                    <span className='carousel-comment-snippet font-italic'>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>Ut, aliquam, purus, sit, amet</span>
                            </div>
                            <div className='carousel-single-comment'>
                                <div className='comment-heading'>
                                    <p className='carousel-comment-title'>Organizacja “Lorem Ipsum 3”</p>
                                    <span className='carousel-comment-snippet  font-italic'>Scelerisque in dictum non consectetur a erat nam.</span>       
                                </div>
                                <span className='carousel-comment-snippet'>Mi, quis, hendrerit, dolor</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className='carousel-pagination'>
                        <button 
                        className={firstPage ? 'carousel-page-btn-active':'carousel-page-btn'} 
                        onClick={toggleFirstPage}
                        >1</button>
                        <button 
                        className={secondPage ? 'carousel-page-btn-active':'carousel-page-btn'}
                        onClick={toggleSecondPage}
                        >2</button>
                        <button 
                        className={'carousel-page-btn-none'}
                        onClick={toggleThirdPage}
                        >3</button>
                        
                        
                    </div>
                </div>
                <div className={thirdBtn ? 'carousel-container':'carousel-not-active'}>
                    <h4 className='carousel-heading'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation.
                    </h4>
                    <div className='carousel-comments-section'>
                        <div className='carousel-single-comment'>
                            <div className='comment-heading'>
                                <p className='carousel-comment-title'>Zbiórka “Lorem Ipsum 1”</p>
                                <span className='carousel-comment-snippet font-italic'>Quis varius quam quisque id diam vel quam elementum pulvinar.</span>       
                            </div>
                            <span className='carousel-comment-snippet'>Egestas, sed, tempus</span>
                        </div>
                        <div className='carousel-single-comment'>
                            <div className='comment-heading'>
                                <p className='carousel-comment-title'>Zbiórka “Lorem Ipsum 2”</p>
                                <span className='carousel-comment-snippet font-italic'>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</span>       
                            </div>
                            <span className='carousel-comment-snippet'>Ut, aliquam, purus, sit, amet</span>
                        </div>
                        <div className='carousel-single-comment'>
                            <div className='comment-heading'>
                                <p className='carousel-comment-title'>Zbiórka “Lorem Ipsum 3”</p>
                                <span className='carousel-comment-snippet  font-italic'>Scelerisque in dictum non consectetur a erat nam.</span>       
                            </div>
                            <span className='carousel-comment-snippet'>Mi, quis, hendrerit, dolor</span>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    
    )
}
