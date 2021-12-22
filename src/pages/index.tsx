import {GetStaticProps} from 'next'
import {stripe} from '../services/stripe'
import {HomeTemplate} from '../templates/home'

type ProductProps = {
  priceId: string
  amount: number
}

export type HomeProps = {
  product: ProductProps
}

export default function Home({product}: HomeProps) {
  return <HomeTemplate product={product} />

}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1K8Ex5F2dE7RQsnHkml6sMmd')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
