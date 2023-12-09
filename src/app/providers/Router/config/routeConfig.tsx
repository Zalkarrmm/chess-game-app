import ChessGamePage from 'pages/ChessPage'
import HomePage from 'pages/HomePage'
import NotFoundPage from 'pages/NotFoundPage'
import ProfilePage from 'pages/ProfilePage'
import { AppRoutes, routeConsts } from 'shared/const/router'
import { AppRoutesProps } from 'shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.HOME]: {
    path: routeConsts.HOME(),
    element: <HomePage />,
  },
  [AppRoutes.CHESS_PLAY]: {
    path: routeConsts.CHESS_PLAY(),
    element: <ChessGamePage />,
  },
  [AppRoutes.PROFILE]: {
    path: routeConsts.PROFILE(':id'),
    element: <ProfilePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
}
