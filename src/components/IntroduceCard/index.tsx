import React from 'react'
import { Card } from '@uifabric/react-cards'
import { Text, mergeStyleSets, Image, Stack, ActionButton } from 'office-ui-fabric-react'

export interface IntroduceCardProps {
  title: string
  iconUrl: string
  introduction: string
  to: string
}

const classNames = mergeStyleSets({
  title: {
    padding: '1.7rem 0 0 1.2rem',
    lineHeight: '49px'
  },
  introduction: {
    fontWeight: '400'
  },
  line: {
    marginLeft: '1.2rem',
    width: '100px',
    height: '3px',
    backgroundColor: '#553580'
  },
  buttonColor: {
    color: '#553580',
    selectors: {
      ':hover': {
        color: '#371761'
      }
    }
  }
})

const IntroduceCard: React.FC<IntroduceCardProps> = ({ title, introduction, iconUrl }) => {
  return (
    <Card tokens={{
      minWidth: '350px',
      width: '350px'
    }}>
      <Card.Item>
        <Stack horizontal>
          <Text className={classNames.title} variant='xxLargePlus'>{title}</Text>
          <Image width='100px' src={iconUrl}/>
        </Stack>
      </Card.Item>
      <Card.Item>
        <div className={classNames.line}/>
      </Card.Item>
      <Card.Section
        horizontalAlign='center'
        verticalAlign='center'
        tokens={{
          padding: '1rem 1.2rem'
        }}
        styles={{
          root: {
            height: '8rem'
          }
        }}
      >
        <Text
          variant='xLarge'
          styles={{ root: { color: '#666' } }}
          className={classNames.introduction}
        >
          {introduction}
        </Text>
      </Card.Section>
      <Card.Item
        tokens={{
          padding: '1rem 1.2rem'
        }}
      >
        <ActionButton
          text='Learn More'
          menuIconProps={{ iconName: 'forward', color: '#553580' }}
          className={classNames.buttonColor}
          styles={{
            menuIcon: {
              color: '#553580',
              selectors: {
                ':hover': {
                  color: '#371761'
                }
              }
            }
          }}
        />
      </Card.Item>
    </Card>
  )
}

export default IntroduceCard
