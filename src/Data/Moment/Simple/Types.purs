module Data.Moment.Simple.Types
  ( Moment()
  ) where

import Prelude (class Eq, class Ord, compare)

foreign import data Moment :: *

foreign import isSame :: Moment -> Moment -> Boolean
foreign import valueOf :: Moment -> Number

instance eqMoment :: Eq Moment where
  eq = isSame

instance ordMoment :: Ord Moment where
  compare m1 m2 = compare (valueOf m1) (valueOf m2)
