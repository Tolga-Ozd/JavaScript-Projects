import Button from 'react-bootstrap/Button';


const Header = () => {
  return (
    <div>
      <h1> Product List</h1>
      <div>
      <Button variant="primary">ALL</Button>{' '}
      <Button variant="secondary">ELECTRONİCS</Button>{' '}
      <Button variant="success">JEWELLERY</Button>{' '}
      <Button variant="warning">MEN'S CLOTHİNG</Button>{' '}
      <Button variant="danger">WOMEN CLOTHİNG</Button>{' '}
      </div>
    </div>
  )
}

export default Header
