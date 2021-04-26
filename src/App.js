import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Wort } from './features/brew/Wort'
import styles from './App.module.css'


function App() {
  const chiller_shelly_addr = useSelector( state => state.chiller_shelly_addr )
  const worts = useSelector( state => state.brew.worts )

  const wort_cols = worts.map ( wort => 
      <Col key={wort.id}><Wort wort_id={wort.id}/></Col>
    )

  return (

    <Container>
      <Row>
        Chiller Shelly Addr: {chiller_shelly_addr}
      </Row>
      <Row>
        <Col>
          <div className={styles.titleColumn}>Name</div>
          <div className={styles.titleColumn}>Tilt Color</div>
          <div className={styles.titleColumn}>Temp</div>
          <div className={styles.titleColumn}>Set temp</div>
          <div className={styles.titleColumn}>Hysteresis</div>
          <div className={styles.titleColumn}>Status</div>
          <div className={styles.titleColumn}>Specific gravity</div>
          <div className={styles.titleColumn}>Cool shelby addr</div>
          <div className={styles.titleColumn}>Heat shelby addr</div>
          <div className={styles.titleColumn}>Rssi</div>
        </Col>
        {wort_cols}
      </Row>
    </Container>


  )
}

export default App;
