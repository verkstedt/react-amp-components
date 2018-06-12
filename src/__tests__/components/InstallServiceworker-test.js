import React from 'react'
import InstallServiceworker from '../../components/InstallServiceworker'
import Helmet from '../../utils/Helmet'
import { renderComponent } from '../test-utils'

describe('InstallServiceworker', () => {
  it('matches the snapshot', () => {
    const installServiceworker = renderComponent(
      <InstallServiceworker
        src="src"
        dataIframeSrc="dataIframeSrc"
        dataNoServiceWorkerFallbackUrlMatch="test"
      />
    )
    expect(installServiceworker.toJSON()).toMatchSnapshot()
  })

  it('matches the snapshot with no optional props set', () => {
    const installServiceworker = renderComponent(
      <InstallServiceworker src="src" />
    )
    expect(installServiceworker.toJSON()).toMatchSnapshot()
  })

  it('should correctly set layout prop', () => {
    const installServiceworker = renderComponent(
      <InstallServiceworker src="src" layout="not-correct" />
    )
    expect(installServiceworker.toJSON()).toMatchSnapshot()
  })

  it('injects the right script tag', () => {
    renderComponent(
      <InstallServiceworker />
    )
    Helmet.canUseDOM = false
    const staticHead = Helmet.renderStatic()
    expect(staticHead.scriptTags).toMatchSnapshot()
  })
})
