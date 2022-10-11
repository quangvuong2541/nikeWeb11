import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Hidden, Skeleton } from '@mui/material'
import API from '../../Axios/API'
import * as ActionType2 from "../ListProduct/module/constant/constant"
import * as Action2 from "../ListProduct/module/action/action"
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 44,
    marginBottom: 44
  }
}))
const ProductDetail = ({ id }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [detailProduct, setDetailProduct] = React.useState(null)
  React.useEffect(() => {
    const callAPI = async () => {
      dispatch(
        Action2.createAction({
          type: ActionType2.IS_LOADING_LIST_PRODUCT,
          payload: true
        })
      )
      const res = await API(`/product/${id}`,
        "GET")
      setDetailProduct(res.data)
      dispatch(
        Action2.createAction({
          type: ActionType2.IS_LOADING_LIST_PRODUCT,
          payload: false
        })
      )
    }
    callAPI()
  }, [id])
  const [index, setIndex] = React.useState(0)
  const getIndexImg = (index) => {
    setIndex(index)
  }
  const isLoading = useSelector((state) => state.reducerURL.isLoading)
  return (
    <div>truong quang vuong</div>
  )
}

export default ProductDetail