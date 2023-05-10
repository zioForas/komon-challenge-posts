// import { NextApiRequest, NextApiResponse } from 'next'
// import Twitter from 'twitter'

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const client = new Twitter({
//     consumer_key: 'MG96SWJ1eFFocHJGTnRoLTEzamE6MTpjaQ',
//     consumer_secret: 'S_DOKIE6nT7mVB3ZXC6_TvVZ6abwluUl9rvMRVF4QbWipw54Dl',
//     access_token_key: 'A1547624495413833729-Du2cmtY3ya0RMx9M68qkNHvOj6vkmY',
//     access_token_secret: 'Uxy3cXOOFxy4Vs3Y2vvec1YCvOay2AHGu5Zf7WttbicJW'
//   })

//   const params = { screen_name: 'actual_username', count: 3 } // replace 'actual_username' with the Twitter username you want to fetch tweets from

//   try {
//     const tweets = await client.get('statuses/user_timeline', params)
//     res.status(200).json(tweets)
//   } catch (error) {
//     res.status(500).json({ error: 'Unable to retrieve tweets' })
//   }
// }
