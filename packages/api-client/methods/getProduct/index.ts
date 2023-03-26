import { gql } from "@apollo/client";
import { useClient } from "../../helpers/useClient";

export function getProduct() {
  const { query } = useClient()

  query({
    query: gql`
    {
      products {
        
      }
    }`
  })
}