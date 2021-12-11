import { data } from '../todos';
import { Row } from './Row';

export const Todos = () => {
  return (
    <section>
      {data.map((todo) => {
        return <Row key={todo.id} todo={todo} />
      })}
    </section>
  )
}