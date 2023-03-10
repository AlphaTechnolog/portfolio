import { useSignal } from '@preact/signals'
import { useEffect, useCallback } from 'preact/hooks'
import type { JSX } from 'preact/jsx-runtime'

export type Delays = {
  writing?: number
  deleting?: number
  waiting?: number
}

export type Props = {
  texts?: string[]
  delays?: Delays
  singleShot?: boolean
  children?: ({ text }: { text: string }) => JSX.Element
}

export default function TypeWriter({ texts = [], singleShot = false, children = () => <></>, delays }: Props) {
  const actualTextIndex = useSignal(0)
  const actualText = useSignal<string | undefined>(undefined)
  const renderedText = useSignal('')

  const WAITING_DELAY = delays?.waiting || 1800
  const DELETING_DELAY = delays?.deleting || 60
  const WRITING_DELAY = delays?.writing || 80

  const reverseAnimation = useCallback(() => {
    if (!actualText.value) {
      actualText.value = texts[actualTextIndex.value]
    }
    let i = actualText.value.length
    const interval = setInterval(() => {
      if (i <= 0) {
        clearInterval(interval)
        renderedText.value = ''

        if (actualTextIndex.value === texts.length - 1) {
          actualText.value = texts[0]
          actualTextIndex.value = 0
        } else {
          actualText.value = texts[actualTextIndex.value + 1]
          actualTextIndex.value++
        }

        setTimeout(() => {
          doAnimation()
        }, 100)

        return
      }
      renderedText.value = renderedText.value.slice(0, -1)
      i--
    }, DELETING_DELAY)
  }, [actualText])

  const doAnimation = useCallback(() => {
    let i = 0

    const interval = setInterval(() => {
      if (!actualText.value) {
        actualText.value = texts[actualTextIndex.value]
      }
      if (i >= actualText.value.length) {
        clearInterval(interval)

        if (!singleShot) {
          setTimeout(() => {
            reverseAnimation()
          }, WAITING_DELAY)
        }

        return
      }
      renderedText.value += actualText.value[i]
      i++
    }, WRITING_DELAY)
  }, [actualText, reverseAnimation])

  useEffect(() => {
    doAnimation()
  }, [doAnimation, actualText])

  return (
    <>
      {children({ text: renderedText.value })}
    </>
  )
}
