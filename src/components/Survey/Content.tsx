import React, { FC, lazy, Suspense, useState } from 'react'
import { useParams } from 'react-router-dom'
import { content } from '../../data/survey'
import FooterSurvey from '../Global/FooterSurvey'

const importView = (name: string) => lazy(() => import(`./Form/${name}.tsx`))

interface Props {
  bgColor?: string
}

const SimulateContent: FC<Props> = ({ bgColor }): JSX.Element => {
  const { id } = useParams()
  const data = content.find((v) => v.route === id)
  const Survey = importView(data?.survey ?? '')
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  return (
    <div className={`h-full flex flex-col fixed w-full ${bgColor}`}>
      <section className="flex w-full h-full p-8">
        {data?.survey ? (
          <Suspense fallback={null}>
            <Survey setValidAnswer={(valid: boolean) => setIsDisabled(!valid)} />
          </Suspense>
        ) : (
          ''
        )}
      </section>
      <FooterSurvey
        next={data?.next ?? ''}
        saveColumn={data?.column ?? ''}
        className={data?.layout}
        disable={isDisabled}
      />
    </div>
  )
}

export default SimulateContent
