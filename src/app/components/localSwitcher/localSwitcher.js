'use client'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import React, { useTransition } from 'react'
import { Select } from 'antd'

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const localActive = useLocale()

  const handleSelectChange = (language) => {
    const nextLocale = language
    const pathWithoutLocale = pathname.replace(/^\/(en|ro)/, '')

    const newPath = `/${nextLocale}${pathWithoutLocale}`

    startTransition(() => {
      router.replace(newPath)
    })
  }

  return (
    <div>
      <Select
        defaultValue={localActive}
        disabled={isPending}
        onChange={handleSelectChange}
        options={[
          { value: 'ro', label: 'RO' },
          { value: 'en', label: 'EN' },
        ]}
      />
    </div>
  )
}

export default LocalSwitcher
