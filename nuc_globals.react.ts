import * as images from 'nucleify'
import { apiUrlPath, isClient, isDesktop, isMobile } from 'nucleify'

export function apiUrl(): string {
  if (typeof window !== 'undefined' && typeof window.apiUrl === 'function') {
    return window.apiUrl()
  }

  return apiUrlPath
}

export function initNucGlobals(): void {
  if (typeof window === 'undefined') return

  const prefix =
    process.env.NODE_ENV === 'production'
      ? ''
      : process.env.NEXT_PUBLIC_APP_URL || ''

  window.isClient = Boolean(isClient)
  window.isMobile = Boolean(isMobile)
  window.isDesktop = Boolean(isDesktop)

  window.apiUrl = () => prefix + apiUrlPath

  window.nucImages = {
    imgUrl: prefix + images.imgUrl,
    contributorsImgUrl: prefix + images.contributorsImgUrl,
    storysetImgUrl: prefix + images.storysetImgUrl,
    storysetAboutImgUrl: prefix + images.storysetAboutImgUrl,
    storysetServicesImgUrl: prefix + images.storysetServicesImgUrl,
    storysetBlogImgUrl: prefix + images.storysetBlogImgUrl,
    technologiesImgUrl: prefix + images.technologiesImgUrl,
  }
}
