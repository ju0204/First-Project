import React, { Component } from 'react';
import FireTab from './fireTab';
import './repair.css';

class repair extends Component {
    render() {
        return (
            <div>
                <FireTab />
                <div>
                    <div className="one-container">
                            <div className="introduce-text">
                                <h1 className="introduce-text1"> 산불소화시설 유지보수 </h1>
                                <p className="introduce-text2">
                                산불소화시설은 비상시에 즉시 사용할 수 있도록 지속적인 관심과 관리을 필요로 하는 중요 시설물입니다.<br/>
                                시설물 기동에 이상이 발견될 때에는 정상 유지되도록 보수 가능한 업체를 선정하여 보수하도록 하며, 저희는 수년간의 산불소화시설 설치경험과 보수 노하우를 갖춘 업체입니다.
                                </p>
                            </div>
                        </div>

                        <div className="repair-line"></div>
                    <div className="repair-two-container">
                        <div className="repair-need-title">
                            <h1>산불소화시설 유지 보수가 필요할때?</h1>
                        </div>
                        <div className="repair-need-ex-container">
                            <ul className="repair-need-list">
                                <li>
                                    <p className="repair-need-number">1</p>
                                    <p className="repair-need-text"> 엔진펌프 또는 모터펌프가 정상기동하지 않을 때</p>
                                </li>
                                <li>
                                    <p className="repair-need-number">2</p>
                                    <p className="repair-need-text">노출배관의 동파 또는 파손에 따른 배관 누수를 발견한 때</p>
                                </li>
                                <li>
                                    <p className="repair-need-number">3</p>
                                    <p className="repair-need-text">물탱크 내벽 또는 외벽의 누수를 발견한 때</p>
                                </li>
                                <li>
                                    <p className="repair-need-number">4</p>
                                    <p className="repair-need-text">수관수막타워 방사량이 다른 수관수막타워에 비해 현저한 차이를 보일 때</p>
                                </li>
                                <li>
                                    <p className="repair-need-number">5</p>
                                    <p className="repair-need-text">비정상적인 기계 경고음이 발생할 때</p>
                                </li>
                                <li>
                                    <p className="repair-need-number">6</p>
                                    <p className="repair-need-text">그 외 중요한 보수가 즉시 필요하다고 판단될 때</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default repair;