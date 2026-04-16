import React, { Component, createRef } from 'react';
import FireTab from './fireTab';
import tower from './img/tower.jpeg';
import pump from './img/pump.jpeg';
import tank from './img/tank.jpeg';
import machine from './img/machine.jpeg';
import elctronic from './img/elctronic.jpeg';
import './install.css';

class Install extends Component {
    imgRef = createRef();
    cardRefs = Array.from({ length: 5 }, () => createRef()); // 카드별로 ref 생성

    state = {
        isModalOpen: false,
        selectedImage: null,
    };

    componentDidMount() {
        // 이미지 확장 애니메이션을 위한 Intersection Observer
        const imgObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('expand');
                }
            },
            { threshold: 0.5 } // 50% 이상 보일 때 애니메이션 시작
        );
    
        if (this.imgRef.current) {
            imgObserver.observe(this.imgRef.current);
        }
    
        // 카드 애니메이션을 위한 Intersection Observer
        const cardObserverOptions = {
            root: null, // 뷰포트를 기준으로
            rootMargin: '0px',
            threshold: 0, // 1px이라도 보일 때 애니메이션 시작
        };
    
        const cardObserverCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const index = this.cardRefs.findIndex((ref) => ref.current === card);
    
                    // 홀수/짝수에 따라 다른 애니메이션 클래스 추가
                    if (index % 2 === 0) {
                        card.classList.add('slide-in-right');
                    } else {
                        card.classList.add('slide-in-left');
                    }
    
                    observer.unobserve(card); // 애니메이션 적용 후 관찰 중지
                }
            });
        };
    
        const cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);
    
        // 각 카드에 관찰자 연결
        this.cardRefs.forEach((ref) => {
            if (ref.current) {
                cardObserver.observe(ref.current);
            }
        });
    }
    

    openModal = (image) => {
        this.setState({ isModalOpen: true, selectedImage: image });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false, selectedImage: null });
    };

    render() {
        const { isModalOpen, selectedImage } = this.state;

        return (
            <div>
                <FireTab />
                <div>
                    <div className="one-container">
                        <div className="introduce-text">
                            <h1 className="introduce-text1"> 산불소화시설 </h1>
                            <p className="introduce-text2">
                                매년 발생하는 산불의 위험으로부터 직접적인 산불의 진화 및 예방을 목적으로 <br />
                                설치하는 시설물입니다.
                            </p>
                        </div>
                    </div>
                    <div className="install-line"></div>
                    <div className="two-container">
                        <div className="install-need-title">
                            <h1>산불소화시설이 필요한 곳</h1>
                        </div>
                        <div className="install-need-ex-container">
                            <ul className="install-need-list">
                                <li>
                                    <p className="install-need-number">1</p>
                                    <p className="install-need-text"> 자연휴양림, 산림 및 목재 체험장</p>
                                </li>
                                <li>
                                    <p className="install-need-number">2</p>
                                    <p className="install-need-text">시험림, 보호림등 보호할 가치가 높은 산림</p>
                                </li>
                                <li>
                                    <p className="install-need-number">3</p>
                                    <p className="install-need-text">농.산촌등 산림과 인접한 지역</p>
                                </li>
                                <li>
                                    <p className="install-need-number">4</p>
                                    <p className="install-need-text">산불이 빈번하게 발생하는 지역</p>
                                </li>
                                <li>
                                    <p className="install-need-number">5</p>
                                    <p className="install-need-text">대형산불로 확산될 우려가 큰 지역</p>
                                </li>
                                <li>
                                    <p className="install-need-number">6</p>
                                    <p className="install-need-text">그외 산불로 인해 재산상의 큰 피해가 예상되는 지역</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="install-line"></div>

                    <div className="three-container">
                        <div className="card" ref={this.cardRefs[0]}>
                            <div className="image-card" onClick={() => this.openModal(tower)}>
                                <img src={tower} alt="수관수막타워" />
                            </div>
                            <div className="text-card">
                                <h2>수관수막타워</h2>
                                <p>산불로부터 보호할 대상물에게 물을 뿌려주는 직접적인 살수장치</p>
                            </div>
                        </div>
                        <div className="card" ref={this.cardRefs[1]}>
                            <div className="text-card">
                                <h2>엔진펌프 또는 모터펌프</h2>
                                <p>수관수막타워에서 살수될 수 있도록 펌프를 이용한 가압송수장치</p>
                            </div>
                            <div className="image-card" onClick={() => this.openModal(pump)}>
                                <img src={pump} alt="엔진펌프" />
                            </div>
                        </div>
                        <div className="card" ref={this.cardRefs[2]}>
                            <div className="image-card" onClick={() => this.openModal(tank)}>
                                <img src={tank} alt="물탱크" />
                            </div>
                            <div className="text-card">
                                <h2>물탱크</h2>
                                <p>약 40분이상 살수될 수 있도록 소화용수 저장탱크</p>
                            </div>
                        </div>
                        <div className="card" ref={this.cardRefs[3]}>
                            <div className="text-card">
                                <h2>기계실</h2>
                                <p>내부의 기계설비를 보호하고 외부로부터 차단</p>
                            </div>
                            <div className="image-card" onClick={() => this.openModal(elctronic)}>
                                <img src={elctronic} alt="기계실" />
                            </div>
                        </div>
                        <div className="card" ref={this.cardRefs[4]}>
                            <div className="image-card" onClick={() => this.openModal(machine)}>
                                <img src={machine} alt="기계실배관" />
                            </div>
                            <div className="text-card">
                                <h2>기계실배관 및 옥외배관</h2>
                                <p>물탱크, 가압송수장치, 수관수막타워 등을 연결해주는 배관</p>
                            </div>
                        </div>
                    </div>
                </div>

                {isModalOpen && (
                    <div className="modal-overlay" onClick={this.closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedImage} alt="확대된 이미지" />
                            <button className="close-button" onClick={this.closeModal}>
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Install;
