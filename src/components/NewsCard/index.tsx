import React from 'react'
import { Card } from '@uifabric/react-cards'
import { Text, mergeStyleSets, Separator, ActionButton } from 'office-ui-fabric-react'
import { Article } from '~type/index'

type NewsCardProps = Article

const classNames = mergeStyleSets({
  newsCard: {
    backgroundColor: '#fff'
  },
  titleImage: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  }
})

const NewsCard: React.FC<NewsCardProps> = ({ titleImgUrl, author, date, title, description, to }) => {
  return (
    <Card
      tokens={{
        minWidth: '352px',
        width: '352px',
        minHeight: '527px',
        height: '527px',
        childrenMargin: 25
      }}
      className={classNames.newsCard}
    >
      <Card.Section
        fill
        verticalAlign='end'
        className={classNames.newsCard}
        styles={{
          root: {
            backgroundImage: `url(${titleImgUrl})`
          }
        }}
      >
        {/* tip: 填充高度 */}
        <div style={{ height: '240px' }}/>
      </Card.Section>
      <Card.Section
        styles={{
          root: {
            color: '#666666'
          }
        }}
        horizontal
      >
        <Text>{author}</Text>
        <Separator vertical/>
        <Text>{date}</Text>
      </Card.Section>
      <Card.Section>
        <Text
          styles={{
            root: {
              fontWeight: 'bold'
            }
          }}
          variant='large'
        >
          {title}
        </Text>
      </Card.Section>
      <Card.Section
        styles={{
          root: {
            color: '#666666'
          }
        }}
      >
        <Text>{description}</Text>
      </Card.Section>
      <Card.Section
        // tip: let Link at bottom
        verticalAlign='end'
        grow={1}
      >
        <ActionButton
          href={to}
          text='Learn More'
          menuIconProps={{ iconName: 'forward', color: '#553580' }}
          styles={{
            root: {
              color: '#553580'
            }
          }}
        />
      </Card.Section>
    </Card>
  )
}

export default NewsCard