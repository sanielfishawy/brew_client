import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Wort } from './features/brew/Wort'
import styles from './App.module.css'


function App() {
  const worts = useSelector( state => state.brew.worts )

  const wort_cols = worts.map ( wort => 
      <Col key={wort.id}><Wort wort_id={wort.id}/></Col>
    )

  return (

    <Container>
      <Row>
        <Col>
          <div className={styles.titleColumn}>ID</div>
          <div>Name</div>
          <div>Tilt Color</div>
          <div>Temp</div>
          <div>Set temp</div>
          <div>Hysteresis</div>
          <div>Specific gravity</div>
          <div>Cool shelby addr</div>
          <div>Heat shelby addr</div>
          <div>Rssi</div>
        </Col>
        {wort_cols}
      </Row>
    </Container>


  )
}

export default App;
