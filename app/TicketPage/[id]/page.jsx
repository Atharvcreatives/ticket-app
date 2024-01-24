import TicketForm from "@/app/(components)/TicketForm"

const TicketPage = ({params}) => {
  const EDITMODE = params.id === "new" ? false : true
  return (
    <TicketForm />
  )
}

export default TicketPage