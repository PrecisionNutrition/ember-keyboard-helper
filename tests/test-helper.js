import Application from 'dummy/app';
import config from 'dummy/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import setupSinon from './setup-sinon';

setApplication(Application.create(config.APP));

setupSinon();
setup(QUnit.assert);

start();
