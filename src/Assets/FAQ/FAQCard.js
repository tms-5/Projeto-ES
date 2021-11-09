import { Accordion } from "react-bootstrap";

export default function FAQCard() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Quem tem tatuagem pode doar sangue?
          </Accordion.Header>
          <Accordion.Body>
            Quem tem tatuagem pode doar sangue. Só precisa aguardar o prazo de
            um ano após o procedimento, e o mesmo vale para piercing.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            É preciso estar em jejum para doar sangue?
          </Accordion.Header>
          <Accordion.Body>
            Quem tem tatuagem pode doar sangue. Só precisa aguardar o prazo de
            um ano após o procedimento, e o mesmo vale para piercing.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Grávida pode doar sangue?</Accordion.Header>
          <Accordion.Body>
            Grávidas não podem doar sangue. Mas após o período gestacional, em
            casos de parto normal, a mulher pode doar depois de três meses; em
            caso de cesariana, após seis meses. Se estiver amamentando, a mulher
            deve aguardar 12 meses após o parto.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Pessoas gripadas podem doar sangue?
          </Accordion.Header>
          <Accordion.Body>
            Para doar sangue é necessário estar em boas condições de saúde.
            Recomenda-se aguardar 7 dias após a cura da gripe para, então, fazer
            a doação.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Quem teve COVID-19 pode doar sangue?
          </Accordion.Header>
          <Accordion.Body>
            Quem teve contato com pessoas infectadas ou se curou do Covid-19,
            pode doar sangue normalmente, após 30 dias do contato ou cura.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
