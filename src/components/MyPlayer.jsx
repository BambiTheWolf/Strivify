import 'bootstrap-icons/font/bootstrap-icons.css';
import { Col, Row } from 'react-bootstrap'

const MyPlayer = () => (
    <footer className="music-player">
        <Row className="justify-content-center">
      
            <Col></Col>
        
            <Col md={8}>
                <div className="player-middle">
                    <div className="player-middle-icons">
                        <i className="bi bi-shuffle text-light px-1"></i>
                        <i className="bi bi-skip-start-fill text-light px-1"></i>
                        <i className="bi bi-play-circle text-light px-1"></i>
                        <i className="bi bi-skip-end-fill text-light px-1"></i>
                        <i className="bi bi-arrow-repeat text-light px-1"></i>
                    </div>
                    <div className="player-middle-bar">
                        <p className="time-current">0:00</p>
                        <div className="fill mb-2"></div>
                        <p className="time-total">0:00</p>
                    </div>
                </div>
            </Col>

            <Col md={2}>
                <div className="player-right mt-3">
                    
                    <i className="bi bi-volume-up" />
                    <div className="fill" />
                </div>
            </Col>
        </Row>
    </footer>
)

export default MyPlayer