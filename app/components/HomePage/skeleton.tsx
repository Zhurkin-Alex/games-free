'use client'

import {
  StyledButtonContainerSkeleton,
  StyledGameButtonsSkeleton,
  StyledGameCardSkeleton,
  StyledIconPlaceholder,
  StyledMain,
  StyledTextPlaceholder,
} from './style'

const HomePageSkeleton: React.FC = () => {
  return (
    <StyledMain>
      <StyledGameButtonsSkeleton>
        <StyledButtonContainerSkeleton>
          {/* Slot Machine Skeleton */}
          <StyledGameCardSkeleton>
            <StyledIconPlaceholder />
            <StyledTextPlaceholder />
          </StyledGameCardSkeleton>

          {/* Memory Game Skeleton */}
          <StyledGameCardSkeleton>
            <StyledIconPlaceholder />
            <StyledTextPlaceholder />
          </StyledGameCardSkeleton>
        </StyledButtonContainerSkeleton>
      </StyledGameButtonsSkeleton>
    </StyledMain>
  )
}

export default HomePageSkeleton
