module Data.Moment.Simple.Types
  ( Moment()
  ) where

import Prelude (class Eq)

foreign import data Moment :: *

foreign import isSame :: Moment -> Moment -> Boolean

instance eqMoment :: Eq Moment where
    eq = isSame
