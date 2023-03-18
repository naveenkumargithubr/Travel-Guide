import {
  LocationBgCard,
  Heading,
  HeadingBgDescription,
  DescLine,
} from './styledComponents'

import './index.css'

const LocationContainer = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <li className="list-container">
      <LocationBgCard>
        <img src={imageUrl} alt={name} className="img" />
        <HeadingBgDescription>
          <Heading>{name}</Heading>
          <DescLine>{description}</DescLine>
        </HeadingBgDescription>
      </LocationBgCard>
    </li>
  )
}
export default LocationContainer
