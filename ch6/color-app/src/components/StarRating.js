import React from 'react'
import {FaStar} from 'react-icons/fa'

const Star = ({selected = false}) => (
  <FaStar color={selected ? 'red': 'grey'} />
)

const CreateArray = length => [...Array(length)]

export default function StarRating({totalStars = 5}) {
  return CreateArray(totalStars).map((n, i) => <Star key={i} />)
}