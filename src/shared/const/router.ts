/* eslint-disable no-unused-vars */
export enum AppRoutes{
  HOME = 'home',
  CHESS_PLAY = 'chess_play',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile'
}

export const routeConsts = {
  HOME: () => '/',
  CHESS_PLAY: () => '/chess_play',
  NOT_FOUND: () => '/not_found',
  PROFILE: (id: string) => `/profile/${id}`,
}

const {
  HOME,
  CHESS_PLAY,
  NOT_FOUND,
  PROFILE,
} = routeConsts

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [HOME()]: AppRoutes.HOME,
  [CHESS_PLAY()]: AppRoutes.CHESS_PLAY,
  [NOT_FOUND()]: AppRoutes.NOT_FOUND,
  [PROFILE(':id')]: AppRoutes.PROFILE,
}
